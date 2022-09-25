import { useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

const Experience = () => {
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>This is a test!</h2>,
        placement: 'center',
        target: 'body',
        title: 'Step 1',
        styles: {
          tooltip: {
            backgroundColor: 'red',
            position: 'relative',
            left: '200px',
          },
        },
      },
      {
        content: 'These are our super awesome projects!',
        target: '.first',
        title: 'Step 2',
        styles: {
          spotlight: {
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
          buttonNext: {
            backgroundColor: 'red',
            borderRadius: 50,
          },
          overlay: {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
          },
          tooltipContent: {
            padding: '200px 100px',
          },
          tooltipTitle: {
            fontSize: 40,
            margin: '0 0 10px 0',
          },
          tooltip: {
            backgroundColor: 'blue',
            position: 'relative',
            left: '30px',
          },
        },
      },
      {
        content: 'These are our super awesome projects!',
        target: '.second',
        title: 'Step 3',
        styles: {
          spotlight: {
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
          },
          overlay: {
            backgroundColor: 'rgba(120, 120, 0, 0.5)',
          },
        },
      },
      {
        content: 'These are our super awesome projects!',
        target: '.third',
        title: 'Step 4',
        styles: {
          spotlight: {
            backgroundColor: 'rgba(0, 120, 120, 0.5)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 120, 120, 0.5)',
          },
        },
      },
      {
        content: 'These are our super awesome projects!',
        target: '.fourth',
        title: 'Step 5',
        styles: {
          spotlight: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        },
      },
    ],
  });

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ run: false, steps: steps });
    }
  };

  const handleRestart = () => {
    setState({ run: true, steps: steps });
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        run={run}
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps as Step[]}
      />
      <div className="experience2">
        <div className="first">
          <h2 className="title">Title 1</h2>
        </div>
        <div className="second">
          <h2 className="title">Title 2</h2>
        </div>
        <div className="third">
          <h2 className="title">Title 3</h2>
        </div>
        <div className="fourth">
          <h2 className="title">Title4</h2>
        </div>
        <button onClick={handleRestart}>Restart tutorial</button>
      </div>
    </>
  );
};

export default Experience;
