import { getReview, getSlugs } from '../../../../lib/reviews';
import Heading from "@/components/Heading"; 
import Image from 'next/image';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({ params: { slug }}) {
    const review = await getReview(slug);
    console.log('[ReviewPage] rendering', slug);
    return (
      <>
        <Heading>{review.title}</Heading>
        <p className='pb-2 italic'>{review.date}</p>
        <Image src={review.image} alt="stardew valley" 
               width="640" height="360" className="mb-2 rounded" 
        />
        <article dangerouslySetInnerHTML={{__html: review.body}} 
          className='max-w-screen-sm prose prose-slate'
        />
      </>
    )
  }
  