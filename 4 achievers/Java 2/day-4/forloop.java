public class forloop {
    public static void main(String[] args) {
        // for (int i = 0; i <= 7; i++) {
        // System.out.println(i);
        // System.out.println("Harsh");
        // }

        // if-else in for loop //

        // for (int i = 1; i <= 11; i++) {
        // if (i % 2 == 0) {
        // System.out.println(i + " is even number");
        // } else {
        // System.out.println(i + " is odd number");
        // }
        // }

        // Write a program to print table of 5

        // for (int i = 1; i <= 10; i++) {
        // System.out.println(5 + "x" + i + " : " + (5 * i));
        // }

        // print value from 1-20 in less than and more than 10 form

        // int fix = 10;
        // for (int i = 1; i <= 20; i++) {
        // if (i <= fix) {
        // System.out.println(i + " is less than 10");
        // } else {
        // System.out.println(i + " is greater than 10");
        // }
        // }

        // Write a program to print even value b/w 0-10 but cant use if-else

        // for (int i = 0; i <= 10; i = i + 2) {
        // System.out.println(i);
        // }

        // Write a program to print 10-1 (reverse)

        // for (int i = 10; i >= 0; i--) {
        // System.out.println(i);
        // }

        // Write a program to print value from -21 to 10

        // for (int i = -21; i <= 10; i++) {
        // System.out.println(i);
        // }

        // Write a program to print value from 1-5 but break at 3  (break and continue)

        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            if (i == 3) {
                break;
            }
        }
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;
            }
            System.out.println(i);
        }

    }
}
