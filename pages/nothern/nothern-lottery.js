import React, {useState, useEffecct} from 'react';
import GamePanelLayout from '../../app/layouts/game-panel'; 
import Slider from '../../app/components/slider/Slider';
import Advertiser from '../../app/components/advertiser/Advertiser';
import ResultTable from '../../app/containers/ResultTable';
import BetHistoryTable from '../../app/containers/BetHistoryTable';
const NothernLottery = props => {
    return (
        <GamePanelLayout>
            <Slider />
            <>
                <p>body</p>
            </>
            <ResultTable title="Hanoi VIP Lottery Results" />            
            <Advertiser />
            <BetHistoryTable />
        </GamePanelLayout>
    );
};

export default NothernLottery;