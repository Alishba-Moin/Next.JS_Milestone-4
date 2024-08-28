// app/component/mainLinks.tsx

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';

const MainLinks: React.FC = () => {
  return (
    <section className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 justify-items-center mb-12 mt-10">
      <Link href="/posts" className="group bg-zinc-200 border border-gray-300 rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-8 text-center"> 
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600">
            Read My Posts <FontAwesomeIcon icon={faArrowRight} className="inline w-5 h-8 ml-2" />
          </h2>
          <p className="text-gray-600 text-lg"> 
            Discover my latest articles and stories.
          </p>
        </div>
      </Link>

      <Link href="/posts/create" className="group bg-zinc-200 border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600">
            Write a New Post <FontAwesomeIcon icon={faEdit} className="inline w-5 h-8 ml-2" />
          </h2>
          <p className="text-gray-600 text-lg"> 
            Share your thoughts and ideas with the world.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default MainLinks;
