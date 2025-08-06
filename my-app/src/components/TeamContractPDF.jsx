import './TeamContractPDF.css';

const TeamContractPDF = () => {
    return (
        <div className="team-contract-container">
            <h1 className="header">Team Contract</h1>

            <p className="description">
                This document outlines the agreed-upon responsibilities, goals, and expectations
                for our team throughout the course of the project. Please review the terms and
                ensure your commitment to the team contract.
            </p>

            <div className="pdf-container">
                <embed
                    src="/OIP/pdfs/TeamContract.pdf"
                    type="application/pdf"
                    width="100%"
                    height="80vh"
                />
            </div>
        </div>
    );
};

export default TeamContractPDF;
