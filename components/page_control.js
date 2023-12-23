export default function PageControl({moduleTitle, links = []}) {
    return (
        <>
            <div className="d-flex w-100 align-items-center" style={{
                    marginBottom: 40
                }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="h3 mb-0 text-gray-800">{moduleTitle}</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{
                        textAlign:"right"
                    }}>
                        {links.map((element,index) => {
                            return (element);
                        })}
                    </div>
            </div>
        </>
    );
}