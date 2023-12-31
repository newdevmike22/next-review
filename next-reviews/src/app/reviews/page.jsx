import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '../../../lib/reviews';
import Image from 'next/image';

export const metadata = {
  title: 'Reviews',
}

export default async function ReviewsPage() {
    const reviews = await getReviews();
    return (
      <>
        <Heading>Reviews</Heading>
        <ul className='flex flex-row flex-wrap gap-3'>
          {reviews.map((review) => (
            <li key={review.slug} 
              className='bg-white border rounded shadow w-80 hover:shadow-xl'>
              <Link href={`/reviews/${review.slug}`}>
                <Image src={review.image} alt="hollow knight" 
                  width="320" height="180" className="rounded-t"
                />
                <h2 className='py-1 text-center font-orbitron font-semibold'>
                  {review.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
  