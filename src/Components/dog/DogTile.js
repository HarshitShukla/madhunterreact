import ImageLoader from '../shared/ImageLoader';

function DogTile(prop) {
    return (
        <div key={prop.iden} className='tile'>
            <div className='row'>
                <span className="ellipsis"><b>{prop.breed}</b> {prop.coat} fur </span>
            </div>
            <ImageLoader className='imgloader' iden={prop.iden} src={prop.imgpath} {...prop} />
            <div className='row bottom'>
                <span className='left ellipsis'>
                    <b>&#8377;{prop.sellingPrice}</b>
                </span>
                <span className='right subfont ellipsis'>
                    {prop.displayPrice > 0 && <s>&#8377;{prop.displayPrice}</s>}
                </span>
            </div>
        </div>
    );
}

export default DogTile;