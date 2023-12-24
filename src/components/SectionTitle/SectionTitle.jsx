

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto  md:w-3/12 text-center uppercase my-4">
            <p className="text-yellow-700 mb-4">----{" "}{heading}{" "}----</p>
            <h2 className="text-3xl border-y-4">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;