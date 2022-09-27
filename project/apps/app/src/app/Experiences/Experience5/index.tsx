import { useCallback, useEffect, useState, useRef } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

const Experience = () => {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [{ run, steps, stepIndex }, setState] = useState({
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
    stepIndex: 0,
  });

  useEffect(() => {
    auto(0);
  }, []);

  const auto = useCallback(
    (index: number) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        setState({ run: true, steps: steps, stepIndex: index });
        auto(index + 1);
      }, 1000);
    },
    [stepIndex]
  );

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, lifecycle, action } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      auto(0);
      setState({ run: false, steps: steps, stepIndex: 0 });
    }

    if (lifecycle === 'complete' && action === 'close') {
      auto(0);
    }
    console.log(status);
  };

  const handleRestart = () => {
    auto(0);
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        run={run}
        scrollToFirstStep
        hideBackButton
        hideCloseButton
        continuous
        steps={steps as Step[]}
        stepIndex={stepIndex}
        styles={{
          options: {
            zIndex: 10000,
            overlayColor: 'rgba(0, 0, 0, 0.4)',
            primaryColor: '#000',
          },
          buttonNext: {
            display: 'none',
          },
          beacon: {
            display: 'none',
          },
        }}
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
