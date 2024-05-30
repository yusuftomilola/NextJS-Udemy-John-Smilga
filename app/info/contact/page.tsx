import Link from "next/link";

const contactPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        Back To Home
      </Link>
    </div>
  );
};

export default contactPage;
