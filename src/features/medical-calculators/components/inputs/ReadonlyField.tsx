const ReadOnlyField = ({ label, value }: any) => (
  <div>
    <p className="text-xs uppercase text-text-muted">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

export default ReadOnlyField;
