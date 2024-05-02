public class else_if {
    public static void main(String[] args) {
        int marks = -9;
        if (marks <= 32 && marks >= 0) {
            System.err.println("student is fail");
        } else if (marks > 32 && marks <= 50) {
            System.err.println("d grade grade");

        } else if (marks > 50 && marks <= 65) {
            System.err.println("c grade");
        } else if (marks > 65 && marks <= 80) {
            System.err.println("b grade");
        } else if (marks > 80 && marks <= 95) {
            System.err.println("a grade");
        } else if (marks > 95 && marks <= 100) {
            System.err.println("a+ grade");
        } else {
            System.out.println("enter valid marks");
        }
    }
}
