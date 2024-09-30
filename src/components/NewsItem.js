const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imgUrl}
          style={{ height: "15%" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {/* style={{ textAlign: 'right' }} */}
          <h5>
            <span className="badge rounded-pill text-bg-primary">
              {source.name}
            </span>
          </h5>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
