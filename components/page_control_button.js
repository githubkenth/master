export default function PageControlButton({
    url, label
}) {
    return (
        <a href={url} className="btn btn-primary btn-sm bg-gradient-primary rounded-0 btn-icon-split mb-0">
            <span className="icon text-white-600">
                <i className="fas fa-plus-circle"></i>
            </span>
            <span className="text">{label}</span>
        </a>
    );
}