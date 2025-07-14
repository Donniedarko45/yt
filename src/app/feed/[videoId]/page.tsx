interface pageProps {
  params: Promise<{ videoId: string }>;
}

const videoId = async ({ params }: pageProps) => {
  const { videoId } = await params;
  return (
    <>
      <p> This is a VideoId page: {videoId} </p>
    </>
  );
};

export default videoId;
