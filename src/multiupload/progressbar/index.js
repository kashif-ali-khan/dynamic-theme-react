import ProgressBar from 'react-bootstrap/ProgressBar';
const Progress = () => {
    const now = 45;
    return (
        <ProgressBar animated now={now} label={`${now}%`} />
    )

}

export default Progress;