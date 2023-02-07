const PostPreview = ( { post } ) => {
    // ma zwrocic preview ilosc likeow 2 pierwsze linijki tekstu i przycisk read more
    //  (component list z ant design wersja 4) https://ant.design/
    return (
        <div>
            <div>{ post.title }</div>
            <div>{ post.body }</div>
            <div>{ post.likesCount }</div>
        </div>  
    )
    
}

export default PostPreview