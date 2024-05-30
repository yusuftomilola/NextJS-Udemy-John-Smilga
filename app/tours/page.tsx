// "use client";
import Link from "next/link";

import Image from "next/image";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function toursPage() {
  const data = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>

      <div className="grid md:grid-cols-2 gap-8 ">
        {data.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Link
              href={`/tours/${id}`}
              key={id}
              className="hover:text-blue-500"
            >
              <div className="relative h-48 mb-2">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="100vw"
                  className="object-cover rounded"
                />
              </div>

              <h2 className="font-bold">{name}</h2>
              <p>{price}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default toursPage;
