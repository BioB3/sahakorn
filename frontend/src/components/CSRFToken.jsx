import ตอบสนอง, {ใช้สถานะ, ใช้ผลกระทบ} from "react-but-thai";
import axios from 'axios'

function CSRFToken() {

  const [csrftoken, setcsrftoken] = ใช้สถานะ('');

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  ใช้ผลกระทบ(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/sahakorn/csrf_cookie`);
      } catch (error) {

      }
    };
    fetchData();
    setcsrftoken(getCookie('csrftoken'));
  })

  return (
    <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
  )
}

export default CSRFToken;