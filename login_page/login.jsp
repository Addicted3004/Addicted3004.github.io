<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%
    String n=request.getParameter("n");
    String p=request.getParameter("p");
   
    

    
    Class.forName("com.mysql.jdbc.Driver");
    System.out.print("Driver loaded");
    Connection con=DriverManager.getConnection("jdbc:mysql://Localhost:3306/tution","root","root");
	System.out.println ("Connected");
	
    PreparedStatement ps=con.prepareStatement
        ("insert into new_login values(?,?)");
    ps.setString(1,n);
    ps.setString(2,p);
   
    int rowcount=ps.executeUpdate();
   
    
    if(rowcount>0)
    {
        out.print("Successfully Registered");
    }
    else
    {
        out.print("Fail to insert");
    }
    
    
    %>