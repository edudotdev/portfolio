import Image from 'next/Image'

const Imagecard = ({classes, imgSrc}) => {
    return (
        <div className={classes}>
          <Image
            src={imgSrc}
            alt=""
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="" // just an example
          />
        </div>
    );
}

export default Imagecard;
