export default function StageCaption({ onContact }) {
  return (
    <div className="stage-caption">
      <span>Nicolas Venegas / Digital business card</span>
      <button onClick={onContact}>Have an idea? Let’s talk.</button>
    </div>
  );
}
