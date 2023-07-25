// components/Crossword.tsx
import {
    CrosswordProvider,
    DirectionClues,
    CrosswordGrid
} from '@jaredreisinger/react-crossword';

interface CrosswordProps {
    data: {
        across: {
            [key: string]: {
                clue: string;
                answer: string;
                row: number;
                col: number;
            };
        };
        down: {
            [key: string]: {
                clue: string;
                answer: string;
                row: number;
                col: number;
            };
        };
    };
    onAnswerCorrect?: () => void;
    onAnswerIncorrect?: () => void;
    crosswordState?: string;
}

const CrosswordComponent: React.FC<CrosswordProps> = ({ data, onAnswerCorrect, onAnswerIncorrect, crosswordState }) => {
    return (
        <CrosswordProvider
            data={data}
            theme={{
                allowNonSquare: false,
                columnBreakpoint: '500px',
                gridBackground: '#E9EAF6',
                cellBackground: '#FFF',
                cellBorder: '#2E3192',
                textColor: '#000',
                numberColor: '#2E3192',
                focusBackground: '#FA3CBA',
                highlightBackground: crosswordState,
            }}
            onAnswerCorrect={onAnswerCorrect}
            onAnswerIncorrect={onAnswerIncorrect}
        >
            <div style={{ display: 'flex', gap: '5em' }}>
                <div className='bg-gray-200 py-4 px-5 rounded-lg'>
                    <div className='px-4 py-5 rounded-t-lg text-xl uppercase text-center mb-2 bg-[#252775] text-white font-bold'>Across</div>
                    <DirectionClues direction="across" label={' '} />
                </div>
                <div style={{ width: '80em' }} className='px-5 py-5 border shadow bg-[#E9EAF6] rounded-lg'>
                    <CrosswordGrid />
                </div>
                <div className='bg-gray-200 py-4 px-5 rounded-lg'>
                    <div className='px-4 py-5 rounded-t-lg text-xl mb-2 uppercase text-center bg-[#252775] text-white font-bold'>Down</div>
                    <DirectionClues direction="down" label={' '} />
                </div>
            </div>
        </CrosswordProvider>

    );
};
export default CrosswordComponent;
