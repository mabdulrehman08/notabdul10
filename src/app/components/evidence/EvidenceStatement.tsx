type EvidenceStatementProps = {
  tag: string;
  statement: string;
};

export default function EvidenceStatement({ tag, statement }: EvidenceStatementProps) {
  return (
    <div className="evidence-row">
      <span className="evidence-tag">{tag}</span>
      <p className="evidence-text">{statement}</p>
    </div>
  );
}
