import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Posts />
      {console.log(<Stories />)}
    </div>
  )
}

export default Home

