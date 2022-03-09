export default {
    async initRegisterFieldCards(context, data) {

        let tempData = new Array(...data);
        let dataReversed = [];

        for (let i = 0; i < 28; i++) {
            dataReversed.push(tempData[tempData.length - 1]);
            tempData.pop();
        }

        dataReversed.forEach((item, index) => {
            switch (true) {
                case (index === 0):
                    context.commit('addFieldCardsToFirstRow', item);
                    break;
                case (index > 0 && index <= 2):
                    context.commit('addFieldCardsToSecondRow', item);
                    break;
                case (index > 2 && index <= 5):
                    context.commit('addFieldCardsToThirdRow', item);
                    break;
                case (index > 5 && index <= 9):
                    context.commit('addFieldCardsToFourthRow', item);
                    break;
                case (index > 9 && index <= 14):
                    context.commit('addFieldCardsToFifthRow', item);
                    break;
                case (index > 14 && index <= 20):
                    context.commit('addFieldCardsToSixthRow', item);
                    break;
                case (index > 20 && index <= 27):
                    context.commit('addFieldCardsToSeventhRow', item);
                    break;
            }
        });
    },
    async loadFieldCards(context) {
        context.commit('setFieldCards', [[], [], [], [], [], [], []]);
    }
};