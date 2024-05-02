public class condition {
    public static void main(String[] args) {
        // int age = 12;

        // System.out.println(age <= 18 && age >= 18);
        // System.out.println("You cant drive");
        // System.out.println(age <= 18 || age >= 18);
        // System.out.println("You are eligible to drive");

        // if-else //

        // int age = 20;
        // if (age >= 18) {
        // System.out.println("you can vote");
        // } else {
        // System.out.println("you cannot vote");
        // }

        // int passingMarks = 350;
        // if (passingMarks >= 350) {
        // System.out.println("Pass");
        // } else {
        // System.out.println("Fail");
        // }

        int gameage = 4;
        if (gameage > 18) {
            if (gameage < 25) {
                System.out.println("You can play");
            } else {
                System.out.println("You cant play");
            }
        } else {
            System.out.println("You cant enter even first level");
        }
    }
}
