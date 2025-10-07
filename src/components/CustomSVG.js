

const CustomSVG = ({
    HorizPos, VertiPos, leftSVG
}) => {

    return (
        <>
            {
                leftSVG ?

                    < svg className={`opacity-25 md:w-[530px] w-[350px] h-[129px] absolute ${HorizPos} ${VertiPos} hover:opacity-50`
                    } >
                        <ellipse cx="80%" cy="35%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="80%" cy="42%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="80%" cy="50%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="80%" cy="58%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="80%" cy="63%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="80%" cy="65%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                    </svg >

                    :
                    <svg className={`opacity-25 md:w-[530px] w-[350px] h-[129px] absolute ${HorizPos} ${VertiPos} hover:opacity-70`
                    }>
                        <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="gray"  strokeWidth="1" />
                        <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                        <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
                    </svg>



            }
        </>
    );
}

export default CustomSVG;