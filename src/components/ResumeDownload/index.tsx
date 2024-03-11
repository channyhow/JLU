import './styles.scss';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
// import baseUrl from '../../utils/baseUrl';

function ResumeDownload() {
  const resumeUrl = 'http://localhost:5173/resume/resume.jpg';

  return (
    <div
      className="resume"
      style={{ display: 'flex' }}
    >
      {' '}
      <SystemUpdateAltIcon>
        <a href={resumeUrl} download="My_Resume.pdf">
          <h4 style={{ color: '#e8c328' }}>Resume</h4>
        </a>
      </SystemUpdateAltIcon>
    </div>
  );
}

export default ResumeDownload;
