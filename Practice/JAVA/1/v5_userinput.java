import java.util.Scanner;
public class v5_userinput {
    public static void main(String[] args) {
        System.out.println("Taking inputs from user");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number 1");
        // int a = sc.nextInt();
        float a = sc.nextFloat();
        System.out.println("Enter number 2");
        // int b = sc.nextInt();
        float b = sc.nextFloat();
        // int sum = a + b;
        float sum = a + b;
        System.out.print("The sum of these numbers is :");
        System.out.println(sum);

        // String str = sc.next();
        // String str = sc.nextLine();
        // System.out.println(str);

    }
}
