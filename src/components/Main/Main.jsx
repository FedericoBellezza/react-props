import { posts } from "../../assets/data/posts";
export default function () {
  const postListToDisplay = posts.filter((post) => post.published);

  return (
    <>
      {postListToDisplay.map((e) => {
        return (
          <>
            {
              <div key={e.id} className="d-flex justify-content-center p-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.content}</p>
                    <a href="#" className="btn ">
                      Leggi di più
                    </a>
                  </div>
                </div>
              </div>
            }
          </>
        );
      })}
      ;{/* - Card */}
      {/* <div className="d-flex justify-content-center p-5">
        <div className="card ">
          <img
            className="card-img-top"
            src="https://dummyimage.com/600x400/000/fff"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Titolo del Post</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus suscipit consequuntur deserunt totam, quas nihil
              ratione! Quas in voluptatum laboriosam vel magni aspernatur
              tenetur sed minima, eius nulla deleniti ex.
            </p>
            <a href="#" className="btn ">
              Leggi di più
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
