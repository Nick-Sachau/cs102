let ladder = {
    currentStep: 0,
    up() {
        if(this.maxRungs == undefined || this.currentStep < this.maxRungs) {
            this.currentStep++;
            return this;
        }else {
            return this;
        }
    },

    down() {
        if(this.currentStep > 0) {
            this.currentStep--;
            return this;
        }else {
            return this;
        }
        
    },

    showStep() {
        console.log(this.currentStep);
    },

    height(max) {
        this.maxRungs = max;
        return this;
    }
};

ladder.height(1);
ladder.up().up().showStep();