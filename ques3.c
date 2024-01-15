//find the difference between the sum of elements at even indices and odd indices
#include<stdio.h>
int main()
{
    int m;
    printf("Enter the size of Array:");
    scanf("%d",&m);
    int arr[m];
    printf("\nEnter %d elements to add in the array:",m);
    for(int i=0;i<m;i++)
    {
        scanf("%d",&arr[i]);
    }
    int even_sum=0,odd_sum=0;
    for(int i=0;i<m;i++)
    {
        if(i%2==0 || i==0)
        {
            even_sum+= arr[i];
        }
        else
        {
            odd_sum+=arr[i];
        }
        
    }
    printf("The sum of elements at even indices is %d\n",even_sum);
    printf("The sum of elements at odd indices is %d\n",odd_sum);
    printf("Their difference is %d",even_sum-odd_sum);

} 