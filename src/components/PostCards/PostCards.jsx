function labelColor(tag) {
  if (tag == "js") {
    return "bg-warning badge p-3";
  }
  if (tag == "css") {
    return "bg-primary badge p-3";
  }
  if (tag == "html") {
    return "bg-orange badge p-3";
  }
  if (tag == "php") {
    return "bg-lightblue badge p-3";
  }
}

export default function PostCards({ data }) {
  if (!data.published) {
    return;
  } else {
    return (
      <>
        <div key={data.id} className="d-flex justify-content-center p-5">
          <div className="card">
            <img
              className="card-img-top"
              src="https://dummyimage.com/600x400/000/fff"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.content}</p>
              {data.tags.map((tag) => (
                <span className={labelColor(tag)}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
