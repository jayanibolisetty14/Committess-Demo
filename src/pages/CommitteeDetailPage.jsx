import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeftCircle } from 'lucide-react';
import { committeeDetails } from '../data';

const CommitteeDetailPage = () => {
  const { id } = useParams();
  const committee = committeeDetails[id];

  if (!committee) {
    return (
      <div className="container py-5 text-center">
        <h2>Committee Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Committees</Link>
      </div>
    );
  }

  return (
    <div className="committee-detail-page py-5">
      <div className="container">
        {/* Header and Back Button */}
        <div className="detail-header mb-4">
          <h2 className="committee-title-main">{committee.name}</h2>
          <Link to="/" className="back-btn mt-3">
            <ArrowLeftCircle size={20} />
            <span>Back to Committee</span>
          </Link>
        </div>

        {/* Composition Section */}
        <section className="composition-section mb-5">
          <h3 className="section-subtitle mb-4">Composition</h3>
          <div className="composition-grid">
            {committee.composition.map((member, idx) => (
              <div key={idx} className="member-card primary-card">
                <div className="member-info">
                  <h4 className="member-role">{member.role}</h4>
                  <h5 className="member-name">{member.name}</h5>
                  <p className="member-designation">{member.designation}</p>
                  <div className="member-contact">
                    <p><Phone size={14} /> {member.phone}</p>
                    <p><Mail size={14} /> {member.email}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="grievance-box-placeholder">
                <button className="grievance-btn">Grievance Box</button>
            </div>
          </div>
        </section>

        {/* Faculty Members Section */}
        <section className="faculty-section mb-5">
          <h3 className="section-subtitle mb-4">Faculty Members</h3>
          <div className="members-grid">
            {committee.facultyMembers.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* Student Members Section */}
        {committee.studentMembers && committee.studentMembers.length > 0 && (
          <section className="student-section mb-5">
            <h3 className="section-subtitle mb-4">Student Members</h3>
            <div className="members-grid">
              {committee.studentMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .committee-title-main {
          font-size: 1.8rem;
          color: var(--primary-dark);
          border-left: 6px solid var(--primary-color);
          padding-left: 15px;
          background: #f8f9fa;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-bottom: 0;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #004a99;
          color: white;
          padding: 8px 18px;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: transform 0.2s ease;
        }
        .back-btn:hover {
          background-color: #003366;
          transform: translateY(-2px);
        }
        .section-subtitle {
          font-size: 1.4rem;
          color: #333;
          font-weight: 600;
          margin-top: 30px;
        }
        .composition-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: flex-start;
        }
        .member-card {
          background: white;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border: 1px solid #eee;
          flex: 1;
          min-width: 300px;
          text-align: center;
        }
        .primary-card {
           border-top: 4px solid var(--primary-color);
        }
        .member-role {
          font-size: 1rem;
          color: #333;
          margin-bottom: 5px;
        }
        .member-name {
          font-size: 1.2rem;
          color: #004a99;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .member-designation {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 15px;
        }
        .member-contact p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        .grievance-box-placeholder {
            display: flex;
            align-items: flex-start;
        }
        .grievance-btn {
            background-color: #004a99;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
        }
        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }
        .member-card-small {
          background: white;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border: 1px solid #eee;
          text-align: center;
        }
        @media (max-width: 768px) {
          .members-grid {
            grid-template-columns: 1fr;
          }
          .composition-grid {
             flex-direction: column;
          }
          .member-card {
             width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const MemberCard = ({ member }) => (
  <div className="member-card-small">
    <h5 className="member-name">{member.name}</h5>
    <p className="member-designation">{member.designation}</p>
    <div className="member-contact">
      <p><Phone size={14} /> {member.phone}</p>
      <p><Mail size={14} /> {member.email}</p>
    </div>
  </div>
);

export default CommitteeDetailPage;
