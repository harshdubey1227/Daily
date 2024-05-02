import java.util.Scanner;

class Subject{
    int max = 100;
    int obtd;
}

public class v6_percentage {
    public static void main(String[] args) {

         Scanner scn = new Scanner(System.in);
         Subject s1 = new Subject();
         System.out.print("Enter Maths marks");
         s1.obtd = scn.nextInt();
          Subject s2 = new Subject();
         System.out.print("Enter English marks");
         s2.obtd = scn.nextInt();
          Subject s3 = new Subject();
         System.out.print("Enter Hindi marks");
         s3.obtd = scn.nextInt();

         int tobtd = (s1.obtd) + (s2.obtd) + ( s3.obtd);
        int per = (tobtd*100/300);
        System.out.println("Percentage of this student is :" +per);
    }
}
