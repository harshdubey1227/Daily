public class condition {
    public static void main(String[] args) {
        int a = 0;
        if (a % 2 == 0 && a != 0) {
            System.out.println(a + " is even");
        } else if (a == 0) {
            System.out.println(a + " is zero");
        } else {
            System.out.println(a + " is odd");
        }
    }
}
