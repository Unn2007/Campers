import Icons from '../../assets/icons/sprite.svg';

export const Icon = ({width,height,href,className}) => {
    return (
        <svg className={className} width={width} height={height}>
          <use href={`${Icons}#${href}`}></use>
        </svg>
    )

}