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
      },
      {
        content: 'These are our super awesome projects!',
        target: '.first',
        title: 'Step 2',
      },
      {
        content: 'These are our super awesome projects!',
        target: '.second',
        title: 'Step 3',
      },
      {
        content: 'These are our super awesome projects!',
        target: '.third',
        title: 'Step 4',
      },
      {
        content: 'These are our super awesome projects!',
        target: '.fourth',
        title: 'Step 5',
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
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
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
    </>
  );
};

export default Experience;
