public class patternconcepts {
    public static void main(String[] args) {
        // for (int i = 0; i <= 5; i++) {
        // System.out.println("*");
        // }

        // Question 1 : Write a program to print 5x5 star pattern.

        // for (int i = 1; i <= 5; i++) {
        // for (int j = 1; j <= i; j++) {
        // System.out.print ("*");
        // }
        // System.out.println();
        // }

        // Question 2: Write a program to print 5x7 "a" pattern

        // for (int i = 1; i <= 5; i++) {
        // for (int j = 1; j <= 7; j++) {
        // System.out.print("a");
        // }
        // System.out.println();
        // }

        // Question 3: Write a program to print 5x5 star in reverse direction

        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j <= i; j-) {
                System.out.print(" ");
                for (int k = 1; k <= i; k++) {
                    System.out.print("*");
                }
            }
            System.out.println();
        }

        // Question 4: Write a program to print a pattern of your name only including 3
        // letters of your name

        // for (int i = 1; i <= 5; i++) {
        // for (int j = 1; j <= i; j++) {
        // System.out.print("HAR");
        // }
        // System.out.println();
        // }

        // Question 5: Write a program to print 5x5 pattern of numbers in increasing
        // order

        // for (int i = 1; i <= 5; i++) {
        // for (int j = 1; j <= i; j++) {
        // System.out.print(j);
        // }
        // System.out.println();
        // }

    }

}
