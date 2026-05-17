import { NextResponse } from "next/server";
import type { Testimonial } from "@/components/ui/testimonials-columns-1";

type GooglePlaceReview = {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
};

type GooglePlaceDetailsResponse = {
  reviews?: GooglePlaceReview[];
  error?: {
    message?: string;
  };
};

const PLACE_DETAILS_URL = "https://places.googleapis.com/v1/places";

function fillToNine(items: Testimonial[]): Testimonial[] {
  if (items.length === 0) {
    return [];
  }

  const result = [...items];
  let index = 0;

  while (result.length < 9) {
    result.push(items[index % items.length]);
    index += 1;
  }

  return result.slice(0, 9);
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ testimonials: [] }, { status: 200 });
  }

  const normalizedPlaceId = placeId.replace(/^places\//, "");
  const url = `${PLACE_DETAILS_URL}/${normalizedPlaceId}?${new URLSearchParams({
    languageCode: "sl",
  }).toString()}`;

  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "reviews.rating,reviews.text,reviews.relativePublishTimeDescription,reviews.authorAttribution.displayName,reviews.authorAttribution.photoUri",
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    return NextResponse.json({ testimonials: [] }, { status: 200 });
  }

  const data = (await response.json()) as GooglePlaceDetailsResponse;

  const reviews =
    data.reviews
      ?.filter((review) => review.rating === 5)
      .map((review) => ({
        text: review.text?.text?.trim() || "Ocena 5 zvezdica bez teksta.",
        image:
          review.authorAttribution?.photoUri ||
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
        name: review.authorAttribution?.displayName || "Google korisnik",
      })) || [];

  return NextResponse.json({ testimonials: fillToNine(reviews) });
}
