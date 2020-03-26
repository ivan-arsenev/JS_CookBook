import delay from 'redux-saga';

it('describe', done => {
    setTimeout(done, 1000);
});

it('describe', () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
});

it('async test 3', async () => {
    async () => await delay(100);
});
