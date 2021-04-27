function Palindrome(string){ 
    this.string = string;
    this.isPalindrome = function(){
        let status = true;
        for (let index = 0; index < string.length; index++) {
            const l1 = string.charAt(index);
            const l2 = string.charAt(string.length-index-1);
            if(l1!=l2) {
                status = false;
            }
        }
        return status;
    }
}