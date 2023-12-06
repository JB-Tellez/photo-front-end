export default function Photos(props) {
  return (
    props.photos.map((photo) => (
      <div key={photo.img_url}>
        {photo.img_url &&
          <a href={photo.original_image}><img alt={props.searchQuery} width={200} src={photo.img_url} /></a>
        }
        <span>photo by: {photo.photographer} from unsplash</span>
      </div>
    ))
  )
}
