import useClose from "../utils/useClose";

function InfoTooltip({ imageStatus, title, isOpened, onClose }) {
  useClose(isOpened, onClose);

  return (
    <div className={`popup ${isOpened ? "popup_active" : ""}`}>
      <div className="popup__info">
        <img className="popup__status" src={imageStatus} alt="Статус входа" />
        <h2 className="popup__message">{title}</h2>
        <button
          className="popup__close-button"
          type="button"
          title="Закрыть"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;