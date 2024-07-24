import image from '../assets/download.jpeg'

const NewsItems = ({ title, description, src, url }) => {
  return (
    <section>
     <div className="card bg-dark col-sm-6 text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} style={{height:'200px', width:'300px'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):'here is some news'}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
    </section>
    
  );
};

export default NewsItems;
