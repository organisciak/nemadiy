<%@ include file="/common/taglibs.jsp"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>component property editor</title>
</head>
<body>
Flow: ${flow.name}
<br />
Component: ${component.name}
<br />
<label>--${component.description}</label>
<form:form>
  
  <c:forEach items="${datatypeMap}" var="property">
    <fieldset id="pt1">
    <label for="jobname"> ${property.key} </label>
    <render:componentproperty roles="${userRoles}"
            component="${component.instanceUri}" value="${property.value}"
            class="cssClass" />
    <font color="green">${property.value.description}</font>
    </fieldset>
  </c:forEach>
  ${taskFlowModel.executableMap} ${component.name}  ${componentList[0].name }  ${conversationScope.component.name }
  ${datatypeMap}
  <c:if test="${taskFlowModel.executableMap[component]!=null}">
    <fieldset id="pt1">
    <label for="jobname"> Profile: </label>
    ${taskFlowModel.executableMap[component].path}
 </fieldset>
  </c:if>
  <input type="submit" name="_eventId_next" value="next" />
  <input type="submit" name="_eventId_cancel" value="cancel" />
</form:form>
</body>
