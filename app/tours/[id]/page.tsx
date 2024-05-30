const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>The id for this page is: "{id}"</div>;
};

export default page;
