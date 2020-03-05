import React from 'react';
import LimitedWordTextArea from '../Todo/LimitedWordTextArea';
import OnlineUser from './OnlineUser';

const OnlineUsersWrapper = () => {
    const onlineUsers = [{ name: 'someUser1' }, { name: 'someUser2' }];

    const onlineUsersList = [];
    onlineUsers.forEach((user, index) => {
        onlineUsersList.push(
            <OnlineUser key={index} index={index} user={user} />
        );
    });

    return (
        <>
            <div className="onlineUsersWrapper">
                <div className="sliderHeader">
                    Online users - {onlineUsers.length}
                </div>
                {onlineUsersList}
            </div>
            <LimitedWordTextArea limit={5} value="Hello there!" />,
        </>
    );
};

export default OnlineUsersWrapper;
