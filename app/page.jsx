import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center" > 
        AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center" >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis, nisi eius saepe libero ipsum excepturi assumenda a distinctio corrupti officia. Ratione exercitationem nam eaque dolorem ad, sed et? Quia.
      </p>

          <Feed />

    </section>
  )
}

export default Home

