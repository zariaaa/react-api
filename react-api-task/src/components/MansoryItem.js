import React , { useEffect , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart , faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import  { Container }  from 'react-bootstrap';

const MansoryItem = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://api.unsplash.com/photos/?client_id=f5fff61efe15d7b33458cff25fa7f641098e2400076ab79e69befe3cbcace3f6")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    // Check out the output data
    // console.log(items);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>I am still thinking...</div>;
    } else {
      return (
          
          <div className="mansory-card">
              <Container>
                <h3>Latest Posts Unsplash</h3>
                    <ul className="container-card">
                        {items.map(item => (
                            <li className="card-content" key={item.id}>
                                <div className="main-card-content">
                                    <div className="card-image">
                                        <img src={item.urls.full} alt={item.user.first_name}/>
                                        <div className="card-info">
                                            <div class="middle">
                                                <div className="card-username">
                                                    <h3>@{item.user.username}</h3>
                                                </div>
                                                <div className="card-name">
                                                    <h3>{item.user.first_name}</h3>
                                                </div>
                                                <div className="card-bio">
                                                    <p>{item.user.bio}</p>
                                                </div>
                                                <div className="card-counts">
                                                    <div className="card-likes">
                                                        <FontAwesomeIcon icon={faHeart} color="#c20071" />
                                                        <div className="card-counts-content">
                                                            {item.likes}
                                                        </div>
                                                    </div>
                                                    <div className="card-photos">
                                                        <FontAwesomeIcon icon={faPhotoVideo} color="#e78404" />
                                                        <div className="card-counts-content">
                                                            {item.user.total_photos}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
          </div>
      );
    }
  }

  export default MansoryItem;